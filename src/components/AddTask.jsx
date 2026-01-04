import { useState } from "react";
import Input from "./input";
import SubTitle from "./SubTitle";
import Box from "./Box";
import Button from "./Button";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <Box> 
      <SubTitle>Gerenciador de Tarefas</SubTitle>

      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Button
        onClick={() => {
          if (!title.trim() || !description.trim())
            return alert("Por favor, preencha todos os campos");
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </Button>
    </Box>
  );
}

export default AddTask;
