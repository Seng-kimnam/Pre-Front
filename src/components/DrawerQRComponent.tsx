"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import QRCodeComponent from "./QRCodeComponent";
import { FC } from "react";

interface QRNumber {
  bankAccount?: string;
}

const DrawerQRComponent: FC<QRNumber> = ({ bankAccount }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className=" outline cursor-pointer">Book now</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Welcome to our room renting!</DrawerTitle>
            <DrawerDescription>Scan here for book your room.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  <QRCodeComponent data={String(bankAccount)} width={400} />
                </div>
              </div>
            </div>
            <div className="mt-3 h-[120px]"></div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
export default DrawerQRComponent;
