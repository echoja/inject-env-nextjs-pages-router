import { getNodeEnv } from "@/lib/config";
import { useEffect, useState } from "react";

export const ShowBrowserNodeEnv = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return show ? (
    <div>
      <h2>ShowBrowserNodeEnv</h2>
      <p>
        <code>NODE_ENV</code> is set to:{" "}
        <span className="node-env-value">{getNodeEnv()}</span>
      </p>
    </div>
  ) : null;
};
