import React, { useState, useEffect } from 'react';
import { getTask } from '../services/operations/add';

function ViewTask() {
    const [tasks, setTasks] = useState({ new: [], started: [], finished: [], due: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const taskData = await getTask();
                setTasks({
                    new: taskData.new || [],
                    started: taskData.started || [],
                    finished: taskData.finished || [],
                    due: taskData.due || []
                });
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <p>TaskList</p>

            {tasks.new.length === 0 ? (
                <p>No new tasks</p>
            ) : (
                tasks.new.map((task) => (
                    <div key={task.id}>
                        {task.task}
                        <p>{task.category}</p>
                        <p>{task.deadline.substring(0, 10)}</p>
                    </div>
                ))
            )}

            {tasks.started.length === 0 ? (
                <p>No started tasks</p>
            ) : (
                tasks.started.map((task) => (
                    <div key={task.id}>
                        {task.task}
                        <p>{task.category}</p>
                        <p>{task.deadline.substring(0, 10)}</p>
                    </div>
                ))
            )}

            {tasks.finished.length === 0 ? (
                <p>No finished tasks</p>
            ) : (
                tasks.finished.map((task) => (
                    <div key={task.id}>
                        {task.task}
                        <p>{task.category}</p>
                        <p>{task.deadline.substring(0, 10)}</p>
                    </div>
                ))
            )}

            {tasks.due.length === 0 ? (
                <p>No due tasks</p>
            ) : (
                <div>
                    <p>Due Tasks</p>
                    {tasks.due.map((task) => (
                        <div key={task.id}>
                            {task.task}
                            <p>{task.category}</p>
                            <p>{task.deadline.substring(0, 10)}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ViewTask;
