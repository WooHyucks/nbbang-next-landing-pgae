"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import Image from "next/image";
interface QRCodeModalProps {
  url: string;
  imageSrc: string;
}

const QRCodeModal = ({ url, imageSrc }: QRCodeModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} modal={false}>
      {isOpen && <div className="fixed inset-0 bg-black/50"></div>}
      <DialogTrigger asChild>
        <Image
          src={imageSrc}
          alt="클릭하여 QR 코드 보기"
          width={300}
          height={0}
          className="rounded-lg sm:w-[250px] w-[150px]"
        />
      </DialogTrigger>
      <DialogContent className="p-8 max-w-md mx-auto text-center bg-white rounded-3xl border border-gray-100">
        <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
          해당 기능은 앱에서 사용 가능해요!
        </DialogTitle>
        <p className="text-base text-gray-600 mb-6">
          앱 설치하고 더 편하게 정산해보세요
        </p>
        <div className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl p-6 mb-6">
          <div className="bg-white p-4 rounded-xl">
            <QRCodeCanvas value={url} size={180} className="rounded-lg" />
          </div>
          <p className="mt-4 text-sm text-gray-600 font-medium">
            휴대폰으로 QR 코드를 스캔해서 설치해보세요
          </p>
        </div>
        <DialogClose asChild>
          <button className="w-full text-white font-semibold bg-gray-900 px-6 py-3 mt-2 rounded-2xl hover:bg-gray-800 transition-all duration-200 active:scale-[0.98]">
            확인
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default QRCodeModal;
