type BaseEntity = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

type GoalTask = BaseEntity & {
  label: string;
  value: string | number;
};

export type Goal = BaseEntity & {
  title: string;
  description: string;
  tasks: GoalTask[];
};
