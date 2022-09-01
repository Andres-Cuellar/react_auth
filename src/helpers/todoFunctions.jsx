const url = "http://localhost:3000/tasks/";

export class servicesAPI {
  loadTasks = async () => {
    const res = await axios.get(url);
    if (res) setTasksList(res.data);
  };

  createID = () => {
    const random = Math.random().toString(36);
    const date = Date.now().toString(36);
    return date + random;
  };

  addTask = async (tasks) => {
    const res = await axios.post(url, tasks);
    loadTasks();
  };

  editTask = async (id, task) => {
    await axios.put(`${url}${id}`, task);
    loadTasks();
  };

  deleteTask = async (id) => {
    swal({
      title: "¿Deseas eliminar esta tarea?",
      text: "Si das 'OK' se eliminará PARA SIEMPRE!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`${url}${id}`).then((res) => {
          swal({
            title: "¡Hecho!",
            text: "La tarea se ha eliminado...",
            icon: "success",
            timer: 2000,
            button: false,
          });
        });

        const updatedTasks = tasksList.filter((task) => task.id !== id);
        setTasksList(updatedTasks);
      }
    });
  };
}
