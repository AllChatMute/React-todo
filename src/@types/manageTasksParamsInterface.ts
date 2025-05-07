export default interface IManageTasksParams {
  method: "POST" | "DELETE";
  body?: { title: string };
  ID?: number;
}
