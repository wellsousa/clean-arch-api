
Tipos de commits validos segundo o padrão 'conventional commits'

type:
    feat     a new feature
    fix      a bug fix
    docs     documentation only changes
    style    changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    refactor a code change that neither fixes a bug nor adds a feature
    test     adding missing tests or correcting existing ones
    chore    changes to the build process or auxiliary tools and libraries such as documentation generation
    perf     a code change that improves performance
    ci       changes to your CI configuration files and scripts
    temp     temporary commit that won't be included in your CHANGELOG

      scope:
    Optional, can be anything specifying the place of the commit change.
    For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc.
    In App Development, scope can be a page, a module or a component.

  subject:
    A very short description of the change in one line.

Lista os commits criados:

git log

Para adicionar alterações ao commit anterior sem a necessidade, incluise, de adicionar uma descrição:

git commit --amend --no-edit