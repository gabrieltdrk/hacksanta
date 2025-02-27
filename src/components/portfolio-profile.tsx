"use client"

import type React from "react"
import type { UserInfo } from "@/app/meus-projetos/page"
import Image from "next/image"
import { useState, useRef, ChangeEvent } from "react"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Button,
    TextField,
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    FormControlLabel,
    Checkbox
} from "@mui/material"
import { Image as ImageIcon } from "@mui/icons-material"
import { createClient } from "@/utils/supabase/client"

interface ProjectProfileProps {
    userInfo?: UserInfo
}

export default function ProjectProfile({ userInfo }: ProjectProfileProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [projectName, setProjectName] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")
    const [isPublic, setIsPublic] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const nomeCompleto = `${userInfo?.nome} ${userInfo?.sobrenome}`
    const supabase = createClient()

    const handleOpen = () => setIsModalOpen(true)
    const handleClose = () => setIsModalOpen(false)

    const handleImageClick = () => {
        fileInputRef.current?.click()
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const imageUrl = URL.createObjectURL(file)
            setSelectedImage(imageUrl)
        }
    }

    async function uploadImage(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        const file = fileInputRef.current?.files?.[0]
        if (!file) return

        const filePath = `${userInfo?.id}/${Date.now()}_${file.name}`
        const { data, error } = await supabase.storage.from("projetos").upload(filePath, file)

        if (error) {
            console.error("Erro ao fazer upload da imagem:", error)
            return
        }

        await createProject(filePath)
    }

    async function createProject(filePath: string) {
        const { data, error } = await supabase.from("projetos").insert([
            {
                nome: projectName,
                id_criador: userInfo?.id,
                is_public: isPublic,
                imagem_url: filePath,
                descricao: description,
                tags: tags
            }
        ])

        if (error) {
            console.error("Erro ao criar projeto:", error)
        } else {
            console.log("Projeto criado com sucesso:", data)
            handleClose()
        }
    }

    return (
        <>
            <div className="flex gap-10 justify-center p-3 my-10">
                <Image src="/avatar_f.png" width={120} height={120} alt="Profile pic" className="object-cover" />
                <div className="flex flex-col gap-3">
                    <header className="flex flex-col gap-1">
                        <h1 className="text-2xl">{nomeCompleto}</h1>
                        <span>Brasil</span>
                    </header>
                    <button
                        type="button"
                        className="bg-gray-300 hover:bg-gray-400 transition-all p-3 rounded-lg"
                        onClick={handleOpen}
                    >
                        Adicionar projeto
                    </button>
                </div>
            </div>

            <Dialog
                open={isModalOpen}
                onClose={handleClose}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: "8px",
                    },
                }}
            >
                <DialogTitle sx={{ px: 3, py: 2 }}>
                    <Typography fontWeight="500">Adicionar projeto</Typography>
                </DialogTitle>
                <DialogContent sx={{ p: 3 }}>
                    <form onSubmit={uploadImage}>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Selecione o conteúdo que você deseja fazer upload
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3 }}>
                            <Box onClick={handleImageClick} sx={{ minHeight: 400, flex: 1, border: "2px dashed #1976d2", borderRadius: "4px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", bgcolor: "#F8F9FA", cursor: "pointer", overflow: "hidden", position: "relative", "&:hover": { bgcolor: "#F0F2F5" } }}>
                                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
                                {selectedImage ? <Image src={selectedImage} alt="Preview" fill style={{ objectFit: "cover" }} /> : <><ImageIcon sx={{ fontSize: 48, color: "#666", mb: 2 }} /><Typography variant="body2" color="text.secondary" align="center" sx={{ px: 2 }}>Compartilhe seu talento com milhares de pessoas</Typography></>}
                            </Box>
                            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
                                <TextField fullWidth label="Título" variant="outlined" size="small" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                                <TextField fullWidth label="Tags" variant="outlined" size="small" value={tags} onChange={(e) => setTags(e.target.value)} />
                                <TextField fullWidth label="Descrição" variant="outlined" multiline rows={isMobile ? 4 : 8} value={description} onChange={(e) => setDescription(e.target.value)} />
                                <FormControlLabel control={<Checkbox checked={isPublic} onChange={(e) => setIsPublic(e.target.checked)} />} label="Projeto público" />
                            </Box>
                        </Box>

                        <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                            <Button type="submit" variant="contained" sx={{ bgcolor: "#FF5722", "&:hover": { bgcolor: "#F4511E" } }}>SALVAR</Button>
                            <Button variant="contained" sx={{ bgcolor: "#E0E0E0", color: "#000", "&:hover": { bgcolor: "#D5D5D5" } }} onClick={handleClose}>CANCELAR</Button>
                        </Box>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
