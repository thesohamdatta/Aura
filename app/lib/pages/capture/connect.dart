import 'package:flutter/material.dart';

import 'package:provider/provider.dart';

import 'package:aura/pages/home/page.dart';
import 'package:aura/utils/analytics/mixpanel.dart';
import 'package:aura/pages/onboarding/find_device/page.dart';
import 'package:aura/pages/settings/device_settings.dart';
import 'package:aura/providers/onboarding_provider.dart';
import 'package:aura/utils/l10n_extensions.dart';
import 'package:aura/utils/logger.dart';
import 'package:aura/utils/other/temp.dart';
import 'package:aura/widgets/device_widget.dart';

class ConnectDevicePage extends StatefulWidget {
  const ConnectDevicePage({super.key});

  @override
  State<ConnectDevicePage> createState() => _ConnectDevicePageState();
}

class _ConnectDevicePageState extends State<ConnectDevicePage> {
  @override
  void initState() {
    super.initState();
    MixpanelManager().connectDevicePageOpened();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(context.l10n.connect),
          backgroundColor: Theme.of(context).colorScheme.primary,
          actions: [
            IconButton(
              onPressed: () {
                Navigator.of(context).push(
                  MaterialPageRoute(
                    builder: (context) => const DeviceSettings(),
                  ),
                );
              },
              icon: const Icon(Icons.settings),
            )
          ],
        ),
        backgroundColor: Theme.of(context).colorScheme.primary,
        body: ListView(
          children: [
            Consumer<OnboardingProvider>(
              builder: (context, onboardingProvider, child) {
                return DeviceAnimationWidget(
                  isConnected: onboardingProvider.isConnected,
                  deviceName: onboardingProvider.deviceName,
                  deviceType: onboardingProvider.deviceType,
                  animatedBackground: onboardingProvider.isConnected,
                );
              },
            ),
            FindDevicesPage(
              isFromOnboarding: false,
              goNext: () {
                Logger.debug('onConnected from FindDevicesPage');
                routeToPage(context, const HomePageWrapper(), replace: true);
              },
              includeSkip: false,
            )
          ],
        ));
  }
}
