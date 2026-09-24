"use client";

import { useState } from "react";

export default function ContactButton() {
  const [claps, setClaps] = useState(0);

  const handleClap = () => {
    setClaps((claps) => claps + 1);
  };

  return <button>Kom in contact</button>
}
