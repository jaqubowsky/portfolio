type Status = 200 | 201 | 400 | 401 | 403 | 404 | 500 | 501 | 502 | 503;

type ServerResponseProps = {
  data?: JSON;
  message?: string;
  status?: Status;
};

export const ServerResponse = ({ data, status = 200 }: ServerResponseProps) => {
  return new Response(JSON.stringify(data), { status });
};
