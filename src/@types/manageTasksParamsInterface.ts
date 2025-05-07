export default interface IManageTasksParams {
  method: "POST" | "PUT" | "DELETE";
  body?: { title: string };
  ID?: number;
}
