// import { DropdownElement } from "@/components/shared/DropdownElement"
// import { GridBlock } from "@/components/shared/GridBlock"
// import { InputElement } from "@/components/shared/InputElement"
// import { TextAreaElement } from "@/components/shared/TextAreaElement"

// export const PromptForm = () => {
//     return (
//         <GridBlock gridSize="S">
//             <InputElement placeholder={"Choose unique name"} name={"Choose unique name"} value={title}
//                 onChange={(e: any) => handleChangeElem(setTitle, e.target.value)} />
//             <TextAreaElement label={"Choose description"} value={description} rows={2} cols={1}
//                 onChange={(e: any) => handleChangeElem(setDescription, e.target.value)} />
//             <TextAreaElement label={"Create prompt"} value={prompt} rows={10} cols={1}
//                 onChange={(e: any) => handleChangeElem(setPrompt, e.target.value)} />
//             <DropdownElement options={options} selectedValue={model} label={"Choose model"}
//                 onChange={(e: any) => handleChangeElem(setModel, e.target.value)} />
//         </GridBlock>
//     )
// }