import { useState } from "react";

export function InputTexto() {
  const [texto, setTexto] = useState("");

  return (
    <div className="p-6 space-y-4">
      <div>
        <label htmlFor="input-texto" className="block text-sm font-medium mb-2">
          Digite algo:
        </label>
        <input
          id="input-texto"
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite aqui..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <p className="text-lg border-2 rounded-md p-4">
        <strong></strong> {texto}
      </p>
    </div>
  );
}
