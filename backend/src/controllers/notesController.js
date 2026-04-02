export const getAllNotes = async (req, res) => {
  res.status(200).send("You got 20 posts!");
};

// 201 status = created
export const createSingleNote = async (req, res) => {
  res.status(201).json({ message: "Note created successfully!" });
};

export const updateNote = async (req, res) => {
  res.status(200).json({ message: "Note updated successfully!" });
};

export const deleteNote = async (req, res) => {
  res.status(200).json({ message: "Note deleted successfully!" });
};
