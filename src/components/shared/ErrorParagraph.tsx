type ErrorParagraphProps = {
  children: React.ReactNode;
};

const ErrorParagraph = ({ children }: ErrorParagraphProps) => {
  return <p className="text-xs text-yellow-500 font-medium">{children}</p>;
};

export default ErrorParagraph;
