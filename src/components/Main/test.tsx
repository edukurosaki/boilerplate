import { render, screen } from '@testing-library/react'

import Main from '.'

describe('Main />', () => {
  it('should render the color correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#363636' })
  })
})
