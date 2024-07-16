import { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import Creatable from "react-select/creatable";
import { Tag, NoteDate } from "../App";
type NoteFornProps = {
  onSubmit: (data: NoteDate) => void;
};
export function NoteForm({ onSubmit }: NoteFornProps) {
  const title = useRef<HTMLInputElement>(null);
  const markdown = useRef<HTMLTextAreaElement>(null);
  const [TagValeu, setTagValeu] = useState<Tag[]>([
    { label: "zoubir", id: "id" },
  ]);
  const HandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      markdown: markdown.current!.value,
      title: title.current!.value,
    });
    // console.log(markdown.current.value);
  };
  return (
    <Form onSubmit={HandleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Tile</Form.Label>
              <Form.Control ref={title} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <Creatable
                isMulti
                value={TagValeu?.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  setTagValeu(
                    tags.map((tag) => {
                      return { label: tag.label, id: tag.value };
                    })
                  );
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" rows={15} ref={markdown} />
        </Form.Group>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to="..">
            <Button variant="outline-secondary">Cancel</Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
}
