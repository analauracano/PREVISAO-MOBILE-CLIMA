import { StyleSheet } from "react-native";
import { colors, spacing, typography} from "./color";

export const detailsStyles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
    },

    container: {
        flex: 1,
    },

    backButton: {
        padding: spacing.md,
        marginTop: spacing.md,
    },

    backButtonText: {
        ...typography.body,
        color: colors.primary
    },

    header: {
        paddingHorizontal: spacing.md,
        paddingBottom: spacing.md,
    },

    title: {
        ...typography.title,
        color: colors.text,
        textAlign: 'center',
    },

    subtitle: {
        ...typography.subtitle,
        textAlign: 'center',
        marginTop: spacing.xs,
        color: colors.textSecondary,
    },

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: spacing.xl * 2,
    },

    loadingText: {
        ...typography.body,
        color: colors.textSecondary,
        marginTop: spacing.md,
    }, 

     errorContainer: {
        padding: spacing.md,
        alignItems: "center"
    },

    errorText: {
        color: colors.error || '#E63946',
        fontSize: 20,
        textAlign: "center",
        marginBottom: spacing.md,
        fontWeight: 600
    },

    retryButton: {
        backgroundColor: colors.primary,
        padding: spacing.md,
        paddingHorizontal: spacing.lg,
        borderRadius: 12,
        marginTop: spacing.md
    },

    retryButtonText: {
        color: colors.cardBackground,
        fontWeight: '600',
        fontSize: 16
    },

})
