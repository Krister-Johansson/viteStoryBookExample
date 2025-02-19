import { Badge } from "./ui/badge";

interface TodoCardContentTagsProps {
  tags: string[];
}

const TodoCardContentTags = ({ tags }: TodoCardContentTagsProps) => {
  return (
    <div className="flex flex-wrap gap-2 flex-1 mr-4">
      {tags.map((tag) => (
        <Badge variant="outline" key={tag}>
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default TodoCardContentTags;
