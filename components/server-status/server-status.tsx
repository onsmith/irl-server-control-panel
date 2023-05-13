"use client";

import { Alert, Badge, Button, Spinner, Table } from "flowbite-react";
import { HiExclamationCircle } from "react-icons/hi";
import useSWR from "swr";
import fetcher from "../fetcher";

const statusColorMap: Record<string, string> = {
  paused: "warning",
  restarting: "warning",
  removing: "failure",
  running: "success",
  dead: "failure",
  created: "default",
  exited: "failure",
  unknown: "gray",
  offline: "failure",
};

export default function ServerStatusTable(): JSX.Element {
  // Table data
  const { data, error, isLoading } = useSWR("/api/docker", fetcher, {
    refreshInterval: 5000,
  });

  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <Error message={error.message} />;
  } else {
    return (
      <>
        {data.message && <Error message={data.message} />}
        {data.services.length > 0 && (
          <ContainerStatusTable services={data.services} />
        )}
      </>
    );
  }
}

function Loading() {
  return <Spinner color="info" />;
}

interface ErrorProps {
  message: string | undefined;
}

function Error({ message }: ErrorProps) {
  return (
    <Alert color="failure" icon={HiExclamationCircle} className="mb-4">
      <p className="font-medium">Error: Could not query server status</p>
      {message && <p className="mt-1">{message}</p>}
    </Alert>
  );
}

interface ServiceProps {
  id: string;
  name: string;
  state: string;
  status: string;
}

interface ContainerStatusTableProps {
  services: ServiceProps[];
}

function ContainerStatusTable({ services }: ContainerStatusTableProps) {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Service</Table.HeadCell>
        <Table.HeadCell>State</Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell>Action</Table.HeadCell>
      </Table.Head>

      <Table.Body className="divide-y">
        {services.map((service: ServiceProps) => (
          <Table.Row key={service.id}>
            <Table.Cell>
              <code>{service.name}</code>
            </Table.Cell>
            <Table.Cell>
              <div>
                <Badge
                  size="sm"
                  style={{ display: "inline" }}
                  color={statusColorMap[service.state] || "default"}
                >
                  {service.state}
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>{service.status}</Table.Cell>
            <Table.Cell>
              <Button>Restart</Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
