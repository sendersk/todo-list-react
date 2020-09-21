export const toTasks = () => "/tasks";
export const toAbout = () => "/about";

export const toTask = ({id} = {id: ":id"}) => `/tasks/${id}`;