import React, { useState } from 'react';
import styled from 'styled-components';
import { FiEdit2, FiTrash2, FiChevronDown, FiChevronUp, FiClock, FiCalendar } from 'react-icons/fi';
import TaskForm from './TaskForm';
import GlowingCard from './ui/GlowingCard';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask, updateTask }) => {
  const [expandedTaskId, setExpandedTaskId] = useState(null);
  const [editingTaskId, setEditingTaskId] = useState(null);
  
  const toggleExpand = (taskId) => {
    setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
  };
  
  const startEditing = (taskId) => {
    setEditingTaskId(taskId);
  };
  
  const getPriorityBadgeClass = (priority) => {
    switch(priority) {
      case 'high': return 'once-badge-red';
      case 'medium': return 'once-badge-yellow';
      case 'low': return 'once-badge-green';
      default: return 'once-badge-blue';
    }
  };
  
  if (tasks.length === 0) {
    return (
      <GlowingCard width="100%" height="12rem">
        <div className="text-center py-10">
          <p className="mb-4">No tasks found</p>
          <p className="text-sm">Add a new task to get started with your research tracking</p>
        </div>
      </GlowingCard>
    );
  }
  
  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <StyledTaskCard
          key={task.id}
          width="100%"
          height="auto"
          title={task.completed ? `✓ ${task.title}` : task.title}
          titleStyle={task.completed ? 'completed-title' : ''}
        >
          {editingTaskId === task.id ? (
            <div className="p-4">
              <TaskForm 
                addTask={(updatedTask) => {
                  updateTask({ ...updatedTask, id: task.id, createdAt: task.createdAt });
                  setEditingTaskId(null);
                }}
                initialData={task}
                onCancel={() => setEditingTaskId(null)}
                isEditing={true}
              />
            </div>
          ) : (
            <>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CustomCheckbox 
                    type="checkbox" 
                    checked={task.completed} 
                    onChange={() => toggleTaskCompletion(task.id)}
                    className="task-checkbox"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <PriorityBadge priority={task.priority}>
                        {task.priority}
                      </PriorityBadge>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <ActionButton onClick={() => startEditing(task.id)}>
                        <FiEdit2 size={16} />
                      </ActionButton>
                      <ActionButton className="delete" onClick={() => deleteTask(task.id)}>
                        <FiTrash2 size={16} />
                      </ActionButton>
                      <ActionButton onClick={() => toggleExpand(task.id)}>
                        {expandedTaskId === task.id ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                      </ActionButton>
                    </div>
                  </div>
                  
                  <div className="mt-2 flex items-center text-sm">
                    <FiCalendar className="mr-1" size={14} />
                    <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              
              {expandedTaskId === task.id && (
                <div className="mt-4">
                  <DescriptionPanel>
                    <h4 className="panel-title">Description</h4>
                    <p className="whitespace-pre-line">{task.description || 'No description provided.'}</p>
                  </DescriptionPanel>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <DescriptionPanel>
                      <h4 className="panel-title">Category</h4>
                      <p>{task.category || 'Uncategorized'}</p>
                    </DescriptionPanel>
                    <DescriptionPanel>
                      <h4 className="panel-title">Created</h4>
                      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
                    </DescriptionPanel>
                  </div>
                </div>
              )}
            </>
          )}
        </StyledTaskCard>
      ))}
    </div>
  );
};

const StyledTaskCard = styled(GlowingCard)`
  &:after {
    background: ${props => 
      props.children[0]?.props?.children?.props?.initialData?.priority === 'high' 
        ? 'linear-gradient(to bottom, #ff4d4d, #ff2b2b, #ff0000)' 
        : props.children[0]?.props?.children?.props?.initialData?.priority === 'medium'
          ? 'linear-gradient(to bottom, #ffbc2b, #ffa72b, #ff952b)'
          : 'var(--gradient)'
    };
  }
  
  .completed-title {
    text-decoration: line-through;
    opacity: 0.7;
  }
`;

const CustomCheckbox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.375rem;
  border: 2px solid var(--color);
  appearance: none;
  background-color: transparent;
  display: inline-block;
  position: relative;
  margin-right: 0.5rem;
  cursor: pointer;
  vertical-align: middle;
  
  &:checked {
    background-color: var(--color);
    
    &:after {
      content: '✓';
      position: absolute;
      color: #18181b;
      font-size: 0.875rem;
      top: -0.125rem;
      left: 0.125rem;
    }
  }
`;

const PriorityBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  background: ${props => 
    props.priority === 'high' 
      ? 'rgba(255, 77, 77, 0.2)' 
      : props.priority === 'medium'
        ? 'rgba(255, 167, 43, 0.2)'
        : 'rgba(43, 255, 136, 0.2)'
  };
  color: ${props => 
    props.priority === 'high' 
      ? '#ff4d4d' 
      : props.priority === 'medium'
        ? '#ffa72b'
        : '#2bff88'
  };
`;

const ActionButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.secondary};
  background: transparent;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${props => props.theme.colors.primary};
    
    &.delete {
      color: #ff4d4d;
    }
  }
`;

const DescriptionPanel = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 0.5rem;
  
  .panel-title {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color);
    margin-bottom: 0.5rem;
  }
`;

export default TaskList;