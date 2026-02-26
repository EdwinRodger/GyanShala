import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Stack, router } from 'expo-router';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

const SCREEN_OPTIONS = {
  title: 'Dashboard',
};

export default function DashboardScreen() {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-background"
        bounces={false}>
        <View className="flex-1 gap-8 px-6 pb-10 pt-20">
          <View className="gap-2">
            <Text className="text-xs font-medium uppercase tracking-wide text-primary">
              GyanShala
            </Text>
            <Text className="text-2xl font-semibold text-foreground">Your learning dashboard</Text>
            <Text className="text-sm text-muted-foreground">
              Continue where you left off or explore new lessons in your language.
            </Text>
          </View>

          <View className="gap-3 rounded-2xl border border-border/70 bg-card/80 p-4">
            <Text className="text-sm font-semibold text-foreground">
              No recent lessons yet
            </Text>
            <Text className="text-xs text-muted-foreground">
              When you start learning, your recent courses and progress will appear here.
            </Text>
          </View>

          <Button
            className="rounded-2xl"
            onPress={() => {
              router.replace('/');
            }}>
            <Text className="font-medium text-primary-foreground">Go to home</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
}

