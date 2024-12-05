import NoteCard from './components/NoteCard.jsx';

function App() {
  const handleEdit = () => {
    // Handle edit logic
  };

  const handleDelete = () => {
    // Handle delete logic
  };

  return (
    <div className="p-4">
      <NoteCard
        title="Meeting Notes"
        content="Discussed project timeline and deliverables for Q2..."
        date="2024-03-20"
        tags={["work", "meeting", "important"]}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <NoteCard
        title="Training Notes"
        content="Get up and train"
        date="2024-03-20"
        tags={["work", "meeting", "important"]}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
  );
}

export default App;
