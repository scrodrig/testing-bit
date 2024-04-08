
export type ButtonUiProps = {
  /**
   * sets the component children.
   */
  title: string;
};

export function ButtonUi({ title }: ButtonUiProps) {
  return (
    <button>
      {title}
    </button>
  );
}
