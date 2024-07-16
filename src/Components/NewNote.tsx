import { NoteForm } from "./NoteForm";

export function NewNote() {
  return (
    <>
      <h1>NewNote</h1>
      <NoteForm onSubmit={() => {}} />
    </>
  );
}
