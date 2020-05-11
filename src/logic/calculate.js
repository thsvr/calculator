import operate from './operate';

const Calculate = (dataObject, buttonName) => {
  const { total, next, operation } = dataObject;

  if (buttonName === 'AC') {
    return { total: null, next: null, operation: null };
  }

  if (buttonName === '.') {
    if (next) {
      if (next.includes('.')) return {};
      return { total, next: `${next}`, operation };
    }

    if (total) {
      if (total.includes('.')) return {};
      return { total: `${total}`, next: operation };
    }
    return { total: '0.', next, operation };
  }

  if (next && buttonName === '+/-') {
    return { next: next * -1 };
  }

  if (next && buttonName === '+/-') {
    return { next: total * -1 };
  }

  if (total && buttonName === '%') {
    if (next) {
      return { total, next: (operate(0, next, buttonName)), operation };
    }
  }

  if (buttonName === '=' && next === '0' && operation === '/') {
    return {
      error: 'Error!',
    };
  }

  if (buttonName === '=' && total && next && operation) {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: null,
    };
  }
  return {
    total: operate(total, next, operation),
    next: null,
    operation: null,
  };
};


export default Calculate;
