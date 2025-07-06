import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  CheckCircle,
  Users,
  Monitor,
  MessageCircle,
  FileCheck,
  Clock,
  ShipWheelIcon as Wheelchair,
  FlaskRoundIcon as Flask,
  RotateCcw,
  Shield,
  Heart,
  Scale,
  Phone,
  Mail,
  MapPin,
  Star,
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ... outras seções omitidas para brevidade ... */}

      {/* Formulário de Contato */}
      <section id="contato" className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Seu direito merece reconhecimento. Fale conosco!</h2>
              <p className="text-xl text-blue-100 mb-8">
                Nossa equipe está pronta para ouvir seu caso e indicar o melhor caminho. A primeira análise é gratuita,
                e você pode ser atendido sem sair de casa.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100">(12) 3199-9397</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100">contato@vale-previ.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100">Atendimento online em todo o Brasil</span>
                </div>
              </div>
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Entre em contato</CardTitle>
                <CardDescription>Preencha o formulário e entraremos em contato</CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  action="https://formsubmit.co/glaubervinicius2018@gmail.com"
                  method="POST"
                  className="space-y-4"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://valeprev.com.br/obrigado" />

                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome completo</Label>
                    <Input id="nome" name="Nome" required placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone/WhatsApp</Label>
                    <Input id="telefone" name="Telefone" required placeholder="(11) 99999-9999" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" name="Email" required placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Descreva brevemente seu caso</Label>
                    <Textarea
                      id="mensagem"
                      name="Mensagem"
                      required
                      placeholder="Conte-nos sobre sua situação..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    Quero atendimento agora mesmo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ... outras seções e footer ... */}
    </div>
  )
}
