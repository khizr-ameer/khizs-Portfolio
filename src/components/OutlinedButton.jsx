const OutlinedButton = ({ text }) => {
  return (
    <button className="font-mono primary-color px-10 py-4 border rounded border-sky-500 dark:border-sky-400 transition duration-300 hover:-translate-y-1 hover:transition hover:duration-300">
      {text}
    </button>
  );
};

export default OutlinedButton;
