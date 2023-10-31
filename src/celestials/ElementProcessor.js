const process = children => {
  if (children && children.length) {
    return processInternal(children);
  } else if (children) {
    return processInternal([children]);
  }
};

const processInternal = children => {
  let result = [];

  for (let i = 0; i < children.length; i++) {
    const child = children[i];

    const newChild = {
      distance: child.props.distance,
      element: (
        <div key={i} className='w-0 d-flex justify-content-center align-items-center'>
          {child}
        </div>
      )
    };

    let index = 0;

    while (index < result.length) {
      const oldChild = result[index];

      if (oldChild.distance < newChild.distance) {
        break;
      }

      index++;
    }

    result = [...result.slice(0, index), newChild, ...result.slice(index)];
  }

  return result.map(v => v.element);
};

export default process;
