import { useApp } from "./hooks/useApp"
import * as Dialog from '@radix-ui/react-dialog';

function App() {

  const {
    stars,
    currentStarIndex,
    handleStarIndex,
    nextStar,
    prevStar,
  } = useApp()

  const star = stars[currentStarIndex]

  return (
    <div className="mx-auto max-w-[1000px h-screen flex items-center justify-center">
      <Dialog.Root>
        <div className="grid grid-cols-4 gap-3 text-slate-200">

          {
            stars.map(star => (
              <Dialog.DialogTrigger
                key={star.name}
                className="border-2 rounded-lg border-[#29292e] w-48 py-3 delay-75 hover:bg-[#29292e]"
                onClick={() => handleStarIndex(stars.indexOf(star))}
              >

                {star.name}
              </Dialog.DialogTrigger>
            ))
          }

          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
              <Dialog.Title className="text-3xl font-black">{star.name}</Dialog.Title>

              <div className="flex flex-col gap-2 my-6">
                <strong>{star.description}</strong>

                <div>
                  <p>Distância do Sol: {star.distanceFromSun}</p>
                  <p>Diâmetro: {star.diameter}</p>
                </div>
              </div>


              <div className="flex items-center justify-between gap-2">
                <Dialog.Close
                  type="button"
                  className="bg-zinc-500 px-5 h-12 rounded-md font-semiBold hover:bg-zinc-600"
                >
                  Cancelar
                </Dialog.Close>

                <button
                  className="bg-violet-500 px-5 h-12 rounded-md font-semiBold flex items-center hover:bg-violet-600 ml-auto"
                  onClick={prevStar}
                >
                  Anterior
                </button>

                <button
                  className="bg-violet-500 px-5 h-12 rounded-md font-semiBold flex items-center hover:bg-violet-600"
                  onClick={nextStar}
                >
                  Próxima
                </button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>

        </div>
      </Dialog.Root>
    </div>
  )
}

export default App
