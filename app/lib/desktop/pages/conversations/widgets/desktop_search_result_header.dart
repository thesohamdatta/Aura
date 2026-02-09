import 'package:flutter/material.dart';

import 'package:provider/provider.dart';

import 'package:aura/providers/conversation_provider.dart';
import 'package:aura/ui/atoms/aura_badge.dart';
import 'package:aura/ui/atoms/aura_icon_button.dart';
import 'package:aura/ui/atoms/aura_loading_badge.dart';
import 'package:aura/utils/l10n_extensions.dart';
import 'package:aura/utils/responsive/responsive_helper.dart';

class DesktopSearchResultHeader extends StatelessWidget {
  const DesktopSearchResultHeader({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<ConversationProvider>(
      builder: (context, provider, child) {
        var onSearches = provider.previousQuery.isNotEmpty;
        var isSearching = provider.isFetchingConversations;

        if (!onSearches) {
          return const SizedBox.shrink();
        }

        return Container(
          padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 16),
          child: isSearching
              ? _buildSearchLoadingIndicator(context)
              : provider.totalSearchPages > 0
                  ? _buildSearchResults(context, provider)
                  : const SizedBox.shrink(),
        );
      },
    );
  }

  Widget _buildSearchLoadingIndicator(BuildContext context) {
    return OmiLoadingBadge(label: context.l10n.searching);
  }

  Widget _buildSearchResults(BuildContext context, ConversationProvider provider) {
    return Row(
      children: [
        Row(
          children: [
            const OmiIconButton(
              icon: Icons.search_rounded,
              style: OmiIconButtonStyle.neutral,
              size: 24,
              iconSize: 12,
              borderRadius: 6,
              onPressed: null,
            ),
            const SizedBox(width: 6),
            OmiBadge(
              label: context.l10n.searchResults,
              fontSize: 12,
              color: ResponsiveHelper.textTertiary,
              borderRadius: 6,
              backgroundColor: ResponsiveHelper.backgroundSecondary,
            ),
          ],
        ),
        const SizedBox(width: 12),
        Text(
          '"${provider.previousQuery}"',
          style: const TextStyle(
            fontSize: 14,
            fontWeight: FontWeight.w400,
            color: ResponsiveHelper.textSecondary,
            fontStyle: FontStyle.italic,
          ),
        ),
      ],
    );
  }
}
