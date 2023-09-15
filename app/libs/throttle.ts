function throttle<T extends (...args: Parameters<T>) => ReturnType<T>>(
  cb: T,
  delay: number,
) {
  let wait = false
  let storedArgs: any = null

  function checkStoredArgs() {
    if (storedArgs == null) {
      wait = false
    } else {
      cb(...storedArgs)
      storedArgs = null
      setTimeout(checkStoredArgs, delay)
    }
  }

  return (...args: Parameters<T>) => {
    if (wait) {
      storedArgs = args
      return
    }

    cb(...args)
    wait = true
    setTimeout(checkStoredArgs, delay)
  }
}

export { throttle }
