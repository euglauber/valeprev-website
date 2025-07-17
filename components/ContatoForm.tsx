
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ContatoForm() {
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const response = await fetch("https://formspree.io/f/movlqoga", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })

    if (response.ok) {
      setEnviado(true)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }, 5000)
    }
  }

  if (enviado) {
    return (
      <div className="text-center">
        <Image
          src="/agradecimento.png"
          alt="Obrigado pela solicitação"
          width={500}
          height={500}
          className="mx-auto"
        />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="nome">Nome completo</Label>
        <Input id="nome" name="nome" placeholder="Seu nome completo" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="telefone">Telefone/WhatsApp</Label>
        <Input id="telefone" name="telefone" placeholder="(11) 99999-9999" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="caso">Descreva brevemente seu caso</Label>
        <Textarea
          id="caso"
          name="caso"
          placeholder="Conte-nos sobre sua situação..."
          className="min-h-[100px]"
          required
        />
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
        Quero atendimento agora mesmo
      </Button>
    </form>
  )
}
