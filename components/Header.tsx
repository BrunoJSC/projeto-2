"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/sobre", label: "Sobre mim" },
  { href: "/projetos", label: "Meus Projetos" },
  { href: "/certificados", label: "Certificados de Empresas" },
  { href: "/processo", label: "Processo de UX" },
  { href: "/ferramentas", label: "Ferramentas" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="flex w-full items-center justify-between px-32 py-6 bg-[#000]">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
      </Link>

      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger>
          <Menu className="h-6 w-6 text-white" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-auto bg-[#000] text-white p-4 mt-5 border border-white rounded-[2px]">
          {links.map((link) => (
            <DropdownMenuItem className="mb-2" key={link.href}>
              <Link href={link.href}>
                <DropdownMenuLabel>{link.label}</DropdownMenuLabel>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
