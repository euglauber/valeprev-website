"use client"
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

import ContatoForm from "@/components/ContatoForm"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">ValePrev</span>
            </div>
            <nav className="hidden md:flex space-x-8 ml-24">
              <a href="#servicos" className="text-gray-600 hover:text-blue-600 transition-colors">
                Serviços
              </a>
              <a href="#por-que-escolher" className="text-gray-600 hover:text-blue-600 transition-colors">
                Diferenciais
              </a>
              <a href="#depoimentos" className="text-gray-600 hover:text-blue-600 transition-colors">
                Depoimentos
              </a>
              <a href="#contato" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contato
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Phone className="h-4 w-4 mr-2" />
              Falar Agora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-blue-600 opacity-90"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Conquiste seu benefício com <span className="text-yellow-300">segurança</span> e apoio especializado
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Com mais de uma década de atuação, oferecemos acompanhamento completo em todas as etapas dos
                  benefícios do INSS.
                </p>
              </div>

              <div className="flex items-center space-x-3 text-blue-100">
                <CheckCircle className="h-6 w-6 text-yellow-300" />
                <span className="text-lg font-semibold">10+ anos de experiência • Mais de 1000 casos resolvidos</span>
              </div>

              <Button
                size="lg"
  onClick={() => {
    const contatoSection = document.getElementById("contato");
    if (contatoSection) {
      contatoSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
>
  Avaliação Gratuita do Seu Caso
              </Button>
            </div>

            <div className="relative ml-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 inline-block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mulher-velha-de-medio-porte-cuidar-de-plantas.jpg-05ZYLIL3GAxqknRVRFZHer9wVPPSs8.jpeg"
                  alt="Senhora idosa sorrindo usando celular para consulta online"
                  width={400}
                  height={500}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-8 bg-green-500 text-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-6 w-6" />
                    <div>
                      <p className="font-bold">Atendimento</p>
                      <p className="text-sm">100% Online</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl border border-blue-700 mb-8 inline-block">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                <span className="text-yellow-300">Conhecimento</span> e prática para resolver seu caso
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Há mais de 10 anos auxiliando segurados do INSS a alcançar o direito à aposentadoria e outros benefícios —
              com atendimento online, simples e acolhedor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="bg-blue-600 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Monitor className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-lg text-gray-900">Atendimento 100% online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Resolva tudo sem sair de casa</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="bg-blue-600 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-lg text-gray-900">Linguagem simples</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Explicações claras, sem juridiquês</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="bg-blue-600 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <FileCheck className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-lg text-gray-900">Avaliação gratuita</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Análise inicial sem compromisso</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="bg-blue-600 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-lg text-gray-900">10+ anos de experiência</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Conhecimento e prática comprovados</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl border border-blue-700 mb-8 inline-block">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Veja com o que podemos <span className="text-yellow-300">te ajudar</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600">Atendemos casos de análise, revisão e ações judiciais para:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Aposentadoria por idade</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Auxílio completo para garantir seu direito à aposentadoria por idade.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Aposentadoria por tempo</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Análise detalhada do seu tempo de contribuição para aposentadoria.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Wheelchair className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Aposentadoria PCD</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Orientação especializada para PCDs obterem seus benefícios.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Flask className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Tempo especial</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Análise de atividades insalubres para contagem especial de tempo.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <RotateCcw className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Revisão de benefícios</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Revisão da RMI por falta de tempo reconhecido e outros casos.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">Pensão por morte</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Assistência para dependentes obterem pensão por falecimento.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Ver todos os serviços
            </Button>
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section
        id="por-que-escolher"
        className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-blue-600 opacity-90"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-2xl border border-white/20 mb-8 inline-block">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Por que escolher nossa <span className="text-yellow-300">assessoria</span>?
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 p-3 rounded-full flex-shrink-0">
                  <Heart className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Atendimento humanizado</h3>
                  <p className="text-blue-100">
                    Tratamos cada cliente com respeito e atenção individualizada, entendendo suas necessidades
                    específicas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 p-3 rounded-full flex-shrink-0">
                  <Scale className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Foco exclusivo em Direito Previdenciário</h3>
                  <p className="text-blue-100">
                    Especialização total na área, garantindo conhecimento aprofundado e atualizado sobre a legislação.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 p-3 rounded-full flex-shrink-0">
                  <Shield className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Total transparência no processo</h3>
                  <p className="text-blue-100">
                    Mantemos você informado em cada etapa, com explicações claras sobre prazos e procedimentos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 p-3 rounded-full flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Comunicação clara e sem termos difíceis</h3>
                  <p className="text-blue-100">
                    Explicamos tudo de forma simples e acessível, sem usar jargões jurídicos complicados.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 inline-block shadow-xl">
                <Image
                  src="/images/melhor-ia-advogado-escritorio.jpg"
                  alt="Advogado profissional trabalhando com dedicação"
                  width={450}
                  height={300}
                  className="rounded-xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Clientes Satisfeitos */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl border border-blue-700 mb-6 inline-block">
              <h2 className="text-2xl lg:text-3xl font-bold">
                Mais de <span className="text-yellow-300">1.000 pessoas</span> já conquistaram seus direitos
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="text-center">
              <p className="text-6xl font-bold text-blue-600 mb-2">1000+</p>
              <p className="text-xl text-gray-600">Casos resolvidos</p>
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold text-blue-600 mb-2">3</p>
              <p className="text-xl text-gray-600">Meses em média</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
              <span className="text-blue-600">Histórias reais</span>, resultados verdadeiros
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=50&h=50&fit=crop&crop=face"
                    alt="Maria L."
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Maria L.</p>
                    <p className="text-sm text-gray-600">São Paulo</p>
                  </div>
                </div>
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "Consegui minha aposentadoria especial com o apoio do Dr. Cursino. A explicação foi clara e tudo foi
                  resolvido online."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=50&h=50&fit=crop&crop=face"
                    alt="José R."
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">José R.</p>
                    <p className="text-sm text-gray-600">Taubaté</p>
                  </div>
                </div>
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "Meu benefício foi negado e ele conseguiu resolver na Justiça. Sempre atencioso e rápido nas
                  respostas."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=50&h=50&fit=crop&crop=face"
                    alt="Ana S."
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Ana S.</p>
                    <p className="text-sm text-gray-600">Rio de Janeiro</p>
                  </div>
                </div>
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "Depois de tentar sozinha por anos, a Vale Prev conseguiu minha aposentadoria em apenas 3 meses.
                  Profissionais excepcionais!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=50&h=50&fit=crop&crop=face"
                    alt="Carlos P."
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Carlos P.</p>
                    <p className="text-sm text-gray-600">Belo Horizonte</p>
                  </div>
                </div>
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "Minha pensão por morte estava complicada, mas eles cuidaram de tudo com muita atenção. Recomendo a
                  todos!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
                  <span className="text-blue-100">contato@valeprev.com.br</span>
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
              <CardContent className="space-y-4">
  <ContatoForm />
</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">ValePrev</span>
              </div>
              <p className="text-gray-400 mb-4">
                Advocacia previdenciária especializada com atendimento online em todo o Brasil.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">(12) 3199-9397</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">contato@valeprev.com.br</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#por-que-escolher" className="text-gray-400 hover:text-white transition-colors">
                    Diferenciais
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-400 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Informações Legais</h3>
              <p className="text-gray-400 text-sm mb-4">
                Vale Prev Advogados – Sociedade de Advogados inscrita na OAB/SP sob o nº 459.75
              </p>
              <p className="text-gray-400 text-sm">
                Este site possui caráter exclusivamente informativo, conforme as normas da OAB. Não há promessa de
                resultado, apenas orientação jurídica responsável.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 ValePrev. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      {/* Botão WhatsApp Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/551231999397?text=Olá! Gostaria de uma avaliação gratuita do meu caso previdenciário."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
