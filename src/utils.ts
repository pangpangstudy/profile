export const angleC = (ref: any, event: MouseEvent) => {
  const rect = ref.current!.getBoundingClientRect();
  // 这里不需要添加滚动偏移量，因为getBoundingClientRect()提供的是相对于视口的位置
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  let deltaX = mouseX - centerX;
  let deltaY = mouseY - centerY;
  let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  return angle;
};
