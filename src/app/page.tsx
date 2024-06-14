import Image from "next/image";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Tabs } from "@/components/ui/tabs";
import { User, Truck, CreditCard } from 'lucide-react'
import { Boxes } from "@/components/ui/background-boxes";

export default function Home() {

    const tabs = [
      {
        title: (
          <div className="flex flex-row items-center justify-center gap-2">
            <User color="black" size={28} /> 
            <h1>Dados</h1>
          </div>
        ),
        value: "dados",
        content: (
          <div>
          {/* STEP 1 */}
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Dados pessoais</CardTitle>
                <CardDescription>Solicitamos apenas as informações essenciais para concluir a compra.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" placeholder="Seu nome completo" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">E-Mail</Label>
                      <Input id="email" type="email" placeholder="Seu melhor e-mail" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">CPF</Label>
                      <Input id="email" placeholder="000.000.000-00" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Celular</Label>
                      <Input id="email" placeholder="Celular para contato se necessário" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                
                <Button>Continuar</Button>
              </CardFooter>
            </Card>
          </div>
        ),
      },
      {
        title: (
          <div className="flex flex-row items-center justify-center gap-2">
            <Truck color="black" size={28} /> 
            <h1>Entrega</h1>
          </div>
        ),
        value: "entrega",
        content: (
          <div>
          {/* STEP 2 */}
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Entrega</CardTitle>
                <CardDescription>Cadastre um endereço que receberá a entrega.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">CEP</Label>
                      <Input id="name" placeholder="00000-000" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Número</Label>
                      <Input id="name" placeholder="11" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Complemento (opcional)</Label>
                      <Input id="name" placeholder="" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                
                <Button>Continuar</Button>
              </CardFooter>
            </Card>
          </div>
        ),
      },
      {
        title: (
          <div className="flex flex-row items-center justify-center gap-2">
            <CreditCard color="black" size={28} /> 
            <h1>Pagamento</h1>
          </div>
        ),
        value: "pagamento",
        content: (
          <div>
          {/* STEP 3 */}
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Pagamento</CardTitle>
                <CardDescription>Escolha sua forma de pagamento preferida.</CardDescription>
              </CardHeader>
              <CardContent>

              </CardContent>
              <CardFooter className="flex justify-between">
                
                <Button>Finalizar</Button>
              </CardFooter>
            </Card>
          </div>
        ),
      }
    ];

  return (
    <main className="w-full flex justify-center flex-col items-center gap-7">
      <div className="h-36 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          Framer motion is the best animation library ngl
        </p>
      </div>
      <div className="flex flex-col items-center max-w-7xl gap-7 lg:flex-row lg:flex-row-reverse xl:w-full lg:items-start">
        <div className="sm:w-[90%] bg-white max-w-sm">
          <Card className="w-full">
                <CardHeader>
                  <CardTitle>Resumo</CardTitle>
                </CardHeader>
                <CardContent>
                  
                </CardContent>
                <CardFooter className="flex justify-between">
                  
                </CardFooter>
          </Card>
        </div>
        <div className="sm:w-[90%] bg-white flex flex-col max-w-3xl justify-center">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </main>
  );
}
