import React, { useContext } from "react";
import { GlobalContext } from "../Context/Context";

const Cites = () => {
    const { openCites, setOpenCites } = useContext(GlobalContext)
  const closeModalReservation = () => {
    setOpenCites(!openCites)
  };

  return (
    <section className="fixed top-0 bottom-0 left-0 right-0 bg-gray-300 w-w-modal-reservation h-h-modal-reservation m-auto z-50 rounded-xl">
      <div className="w-full flex flex-col justify-end  ">
        <p
          onClick={closeModalReservation}
          className="mr-5 mt-4 text-2xl text-black flex self-end hover:text-gray-400 cursor-pointer"
        >
          X
        </p>

        <div className="max-w-4xl mx-auto">
            <table className="w-full divide-y-2 divide-sky-700 text-lg  text-center">
                <thead className="">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Nombre
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Fecha
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Hora
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Email
                        </th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-sky-700 ">
                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Rosa rosa
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            24/05/1995
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            17
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            rosa@gmail.com
                        </td>
                        <td className="whitespace-nowrap px-4 py-2">
                            <a
                                href="#"
                                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                            >
                                Eliminar
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Rosa rosa
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            24/05/1995
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            17
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            rosa@gmail.com
                        </td>
                        <td className="whitespace-nowrap px-4 py-2">
                            <a
                                href="#"
                                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                            >
                                Eliminar
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Rosa rosa
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            24/05/1995
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            17
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            rosa@gmail.com
                        </td>
                        <td className="whitespace-nowrap px-4 py-2">
                            <a
                                href="#"
                                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                            >
                                Eliminar
                            </a>
                        </td>
                    </tr>

                </tbody>
            </table>

        </div>
      </div>
    </section>
  );
};

export default Cites;
