import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import TitleModal from "../TitleModal/TitleModal";
import InputValue from "../InputValue/InputValue";
import InputClick from "../InputClick/InputClick";
import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react";
import ButtonModal from "../ButtonModal/ButtonModal";
import { useState } from "react";
import axios from "axios";

export default function ModalNewTransaction( {open, setOpen, } ) {
  const [title, setTitle] =useState("");
  const [price, SetPrice] =useState(0);
  const [category, setCategory] =useState("");
  const [transactionType, setTransactionType] = useState("deposit")

  

  function handleChangeTitle(ev) {
    setTitle(ev);
  }

  function handleChangePrice(ev) {
    SetPrice(ev);
  }

  function handleChangeCategory(ev) {
    setCategory(ev);
  }

  function handleClickTransactionType (type) {
    setTransactionType(type);
  }
  
  async function handleNewTransaction () {
    await axios.post("http://localhost:3000/transactions", {
      title,
      price,
      category,
      transactionType,
      date: "17/05/2025"
    } );

    setOpen(false)
  }

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
              <TitleModal 
              label="Cadastrar Transação"
              
              />

              <InputValue
                type="text"
                id="01"
                nome="Título"
                placeholder="Título Cadastro"
                onChange={(ev) => handleChangeTitle(ev.target.value)}
              />

              <InputValue
                type="number"
                id="02"
                nome="Preço"
                placeholder="Preço"
                onChange={(ev) => handleChangePrice(ev.target.value)}
              />

              <div className="flex gap-4">
                <InputClick
                  label="Entrada"
                  Icon={ArrowCircleUp}
                  iconColor="text-green-600"
                  onClick={() => handleClickTransactionType("deposit")}
                />
                <InputClick
                  label="Saida"
                  Icon={ArrowCircleDown}
                  iconColor="text-red-600"
                  onClick={() => handleClickTransactionType("withdraw")}
                />
              </div>

              <InputValue
                type="text"
                id="03"
                nome="Categoria"
                placeholder="Categoria"
                onChange={(ev) => handleChangeCategory(ev.target.value)}
              />
            </div>

            <div className="px-4 py-3">
             <ButtonModal
              label="Cadastrar"
              onClick={handleNewTransaction}

             />
            </div>


          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
