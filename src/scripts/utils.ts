const onFocus = (
  target: HTMLElement | null,
  callbackFocus: (target: any, e: any) => void,
  callbackBlur: (target: any, e: any) => void
) => {
  if (target) {
    target.addEventListener('focus', (e) => {
      callbackFocus(target, e)
    })
    target.addEventListener('blur', (e) => {
      callbackBlur(target, e)
    })
  }
}

export {onFocus}