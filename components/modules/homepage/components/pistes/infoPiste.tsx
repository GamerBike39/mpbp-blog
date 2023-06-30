import pisteContent from "./pisteContent"
import { v4 as uuidv4 } from "uuid"

import React from "react";
// import { Modal, Button, Image, Text, Link } from "@nextui-org/react";




    const items = pisteContent

    const content = items.map((item) => {
        return (
            <div key={uuidv4()}>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <p>{item.denivele}</p>
                <p>{item.longueur}</p>
                <p>{item.videoUrl}</p>
            </div>
        )
    })

export default function InfoPiste() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      {/* <Button auto flat color="error" onPress={handler}>
        Open modal
      </Button>
      <Modal noPadding open={visible} onClose={closeHandler}>
        <Modal.Header
          css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
        >

        </Modal.Header>
        <Modal.Body>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">Piste</h1>
                <div className="flex flex-col items-center justify-center">
                    {content}
                </div>
            </div>
            
        </Modal.Body>
      </Modal> */}
    </div>
  );
}