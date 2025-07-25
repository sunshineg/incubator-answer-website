/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {isRegexpStringMatch} from '@docusaurus/theme-common';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type {Props} from '@theme/NavbarItem/NavbarNavLink';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface SProps extends Props {
  tos: Record<string, any>
}

export default function NavbarNavLink({
  activeBasePath,
  activeBaseRegex,
  tos,
  to,
  href,
  label,
  html,
  isDropdownLink,
  prependBaseUrlToHref,
  ...props
}: SProps): JSX.Element {
  // TODO all this seems hacky
  // {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
  const { i18n: { currentLocale } } = useDocusaurusContext();
  // If to is a string, we assume it's a path that needs localization
  const aliasTo = tos?.[currentLocale] || to;
  const toUrl = useBaseUrl(aliasTo);
  const activeBaseUrl = useBaseUrl(activeBasePath);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
  const isExternalLink = label && href && !isInternalUrl(href);

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.tagName === 'A' && event.target.lang) {
        localStorage.setItem('_lang_user_', event.target.lang);
      }
    };
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [])

  // Link content is set through html XOR label
  const linkContentProps = html
    ? {dangerouslySetInnerHTML: {__html: html}}
    : {
        children: (
          <>
            {label}
            {isExternalLink && (
              <IconExternalLink
                {...(isDropdownLink && {width: 12, height: 12})}
              />
            )}
          </>
        ),
      };

  if (href) {
    return (
      <Link
        href={prependBaseUrlToHref ? normalizedHref : href}
        {...props}
        {...linkContentProps}
      />
    );
  }

  return (
    <Link
      to={toUrl}
      isNavLink
      {...((activeBasePath || activeBaseRegex) && {
        isActive: (_match, location) =>
          activeBaseRegex
            ? isRegexpStringMatch(activeBaseRegex, location.pathname)
            : location.pathname.startsWith(activeBaseUrl),
      })}
      {...props}
      {...linkContentProps}
    />
  );
}
