import { getApiEndpoint } from "@/lib/config";
import { useEffect, useState } from "react";

export const ShowBrowserApiEndpoint = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return show ? (
    <div>
      <h2>ShowBrowserApiEndpoint</h2>
      <p>
        <code>API_ENDPOINT</code> is set to:{" "}
        <span className="node-env-value">{getApiEndpoint()}</span>
      </p>
    </div>
  ) : null;
};
