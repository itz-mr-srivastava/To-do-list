import React from 'react';

function TodoFilter({ setFilter, currentFilter }) {
    return (
        <div className="todo-filter">
            <button
                onClick={() => setFilter('all')}
                className={currentFilter === 'all' ? 'active' : ''}
            >
                All
            </button>
            <button
                onClick={() => setFilter('active')}
                className={currentFilter === 'active' ? 'active' : ''}
            >
                Active
            </button>
            <button
                onClick={() => setFilter('completed')}
                className={currentFilter === 'completed' ? 'active' : ''}
            >
                Completed
            </button>
        </div>
    );
}

export default TodoFilter;