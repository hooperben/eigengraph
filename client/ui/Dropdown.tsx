import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";

export const Dropdown = ({ defaultEth }: { defaultEth?: boolean }) => {
  const [selectedImage, setSelectedImage] = useState({
    src: defaultEth ? "Ethereum.svg" : "Optimism.svg",
    alt: "Chain",
  });

  const handleSelect = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        style={{
          userSelect: "none",
          width: "50px",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "50px",
        }}
      >
        {selectedImage.src ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              userSelect: "none",
            }}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={30}
              height={30}
              style={{ outline: "none", border: "none" }}
            />
          </div>
        ) : (
          "Chain"
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Chains</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => handleSelect("Ethereum.svg", "Ethereum")}
        >
          <div style={{ paddingRight: "7px" }}>
            <Image
              src="Ethereum.svg"
              alt={selectedImage.alt}
              className="dark:invert"
              width={20}
              height={25}
            />
          </div>
          Ethereum (Holesky)
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => handleSelect("Optimism.svg", "Optimism")}
        >
          <div style={{ paddingRight: "7px" }}>
            <Image
              src="Optimism.svg"
              alt={selectedImage.alt}
              className="dark:invert px-5;"
              width={20}
              height={20}
            />
          </div>
          Optimism (Sepolia)
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => handleSelect("Polygon.svg", "Polygon")}
        >
          <div style={{ paddingRight: "7px" }}>
            <Image
              src="Polygon.svg"
              alt={selectedImage.alt}
              className="dark:invert"
              width={20}
              height={22}
            />
          </div>
          Polygon (Cardona)
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => handleSelect("Solana.svg", "Solana")}
          disabled
        >
          <div style={{ paddingRight: "7px" }}>
            <Image
              src="Solana.svg"
              alt={selectedImage.alt}
              className="dark:invert"
              width={20}
              height={20}
            />
          </div>
          Solana
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => handleSelect("Schwarma.svg", "Schwarma")}
          disabled
        >
          <div style={{ paddingRight: "7px" }}>
            <Image
              src="Schwarma.svg"
              alt={selectedImage.alt}
              className="dark:invert"
              width={20}
              height={20}
            />
          </div>
          Schwarma
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
