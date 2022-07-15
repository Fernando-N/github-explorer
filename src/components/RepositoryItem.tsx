interface RepositoryItem {
  repository: {
    name: string
    description: string
    html_url: string
  }
}

export function RepositoryItem({ repository }: RepositoryItem) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description ?? 'Sem descrição'}</p>

      <a href={repository.html_url} target="_blank">
        Acessar repositórios
      </a>
    </li>
  )
}

RepositoryItem.defaultProps = {
  repository: {
    name: 'Repository name goes here',
    description: 'Repository description goes here',
    html_url: '#'
  }
}
