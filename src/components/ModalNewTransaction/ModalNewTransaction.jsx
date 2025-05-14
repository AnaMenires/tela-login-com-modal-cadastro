import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import TitleModal from "../TitleModal/TitleModal";
import InputValue from "../InputValue/InputValue";
import InputClick from "../InputClick/InputClick";
import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react";

export default function ModalNewTransaction() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
            <div className="bg-white px-3 pt-4 pb-4 sm:p-6 sm:pb-4 gap-2">
              <TitleModal />

              <InputValue
                type="text"
                id="titulo"
                nome="Título"
                placeholder="Título Cadastro"
              />

              <InputValue
                type="number"
                id="titulo"
                nome="Título"
                placeholder="Preço"
              />

              <div className="flex gap-4">
                <InputClick
                  label="Entrada"
                  Icon={ArrowCircleUp}
                  iconColor="text-green-600"
                />
                <InputClick
                  label="Saida"
                  Icon={ArrowCircleDown}
                  iconColor="text-red-600"
                />
              </div>

              <InputValue
                type="text"
                id="titulo"
                nome="Título"
                placeholder="Categoria"
              />
            </div>

            <div className="px-4 py-3">
              <button
                type="button"
                className="w-full rounded-md bg-green-600 px-6 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500">
                Cadastrar
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
