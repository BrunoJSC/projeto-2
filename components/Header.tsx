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
    <header className="flex md:w-full lg:w-full items-center justify-between md:px-32 px-4 py-4 bg-[#000]">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
      </Link>

      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger>
          <Menu className="h-6 w-6 text-[#00FFBD]" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 bg-[#000] text-white mt-6 border border-[#00FFBD] rounded-[2px]">
          {links.map((link) => (
            <DropdownMenuItem
              className="border-b border-gray-600 p-2"
              key={link.href}
            >
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
