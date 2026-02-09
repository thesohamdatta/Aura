import 'package:flutter/material.dart';

import 'package:aura/ui/atoms/aura_multiline_input.dart';
import 'package:aura/utils/l10n_extensions.dart';
import 'package:aura/utils/responsive/responsive_helper.dart';

class DesktopPromptTextField extends StatelessWidget {
  final TextEditingController controller;
  final String label;
  final String hint;

  const DesktopPromptTextField({
    super.key,
    required this.controller,
    required this.label,
    required this.hint,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: const TextStyle(
            color: ResponsiveHelper.textSecondary,
            fontSize: 14,
            fontWeight: FontWeight.w500,
          ),
        ),
        const SizedBox(height: 8),
        OmiMultilineInput(
          controller: controller,
          hint: hint,
          minLines: 4,
          maxLines: 12,
          validator: (value) => (value == null || value.isEmpty) ? context.l10n.pleaseProvidePrompt : null,
        ),
      ],
    );
  }
}
